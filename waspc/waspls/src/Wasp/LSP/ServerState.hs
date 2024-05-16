{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TemplateHaskell #-}

module Wasp.LSP.ServerState
  ( ServerState (..),
    RegistrationTokens (..),
    TsExportCache,
    DebouncedEvents (..),
    waspFileUri,
    currentWaspSource,
    latestDiagnostics,
    cst,
    tsExports,
    regTokens,
    watchSourceFilesToken,
    watchPrismaSchemaToken,
    reactorIn,
    debouncer,
    prismaEntities,
  )
where

import Control.Concurrent.STM (TChan)
import Control.Lens (makeClassy)
import qualified Data.HashMap.Strict as M
import Data.Hashable (Hashable)
import GHC.Generics (Generic)
import qualified Language.LSP.Server as LSP
import qualified Language.LSP.Types as LSP
import Wasp.Analyzer.Parser.CST (SyntaxNode)
import qualified Wasp.AppSpec as AS
import Wasp.LSP.Debouncer (Debouncer)
import Wasp.LSP.Diagnostic (WaspDiagnostic)
import Wasp.LSP.ExtImport.Path (ExtFileCachePath)
import Wasp.LSP.Reactor (ReactorInput)
import Wasp.TypeScript.Inspect.Exports (TsExport)

-- | LSP State preserved between handlers.
--
-- The server assumes the project has only wasp file. This state will not
-- work correctly if there are multiple wasp files.
--
-- Recommended to use the lenses for accessing the fields.
data ServerState = ServerState
  { -- | Uri of main wasp file.
    _waspFileUri :: Maybe LSP.Uri,
    -- | Uri of the Prisma schema file.
    _prismaSchemaUri :: Maybe LSP.Uri,
    -- | Source text for wasp file.
    _currentWaspSource :: String,
    -- | List of diagnostics generated by waspc after the last file change.
    _latestDiagnostics :: [WaspDiagnostic],
    -- | Concrete syntax tree representing '_currentWaspSource'.
    _cst :: Maybe [SyntaxNode],
    -- | Cache of source file export lists.
    _tsExports :: TsExportCache,
    -- | Cache of Prisma schema entities.
    _prismaEntities :: [AS.Decl],
    -- | Registration tokens for dynamic capabilities.
    _regTokens :: RegistrationTokens,
    -- | Thread safe channel for sending actions to the LSP reactor thread.
    _reactorIn :: TChan ReactorInput,
    -- | See "Wasp.LSP.Debouncer".
    _debouncer :: Debouncer DebouncedEvents
  }

-- | Map from paths to JS/TS files to the list of exports from that file.
type TsExportCache = M.HashMap ExtFileCachePath [TsExport]

-- | LSP dynamic capability registration tokens.
--
-- When a dynamic capability is registered, it returns a 'LSP.RegistrationToken'
-- which can be used to later unregister the capability.
-- See https://microsoft.github.io/language-server-protocol/specifications/specification-3-16/#client_registerCapability.
--
-- We also store these even when we aren't interested in unregistering because
-- we can use it to track whether the capability was registered or not (dynamic
-- registration can fail if the client doesn't support it).
data RegistrationTokens = RegTokens
  { -- | Token for the src/ directory file watcher.
    _watchSourceFilesToken :: Maybe (LSP.RegistrationToken 'LSP.WorkspaceDidChangeWatchedFiles),
    _watchPrismaSchemaToken :: Maybe (LSP.RegistrationToken 'LSP.WorkspaceDidChangeWatchedFiles)
  }

data DebouncedEvents
  = RefreshExports
  deriving (Eq, Show, Generic)

instance Hashable DebouncedEvents

makeClassy 'ServerState

makeClassy 'RegTokens
