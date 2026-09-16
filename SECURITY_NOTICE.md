# Security notice: dependency rebuild required

## What happened

The deployed site is showing a "verify you're not a robot" popup that does
not exist anywhere in this repository's source code. Network logs from the
deployed site show it making requests to BNB Chain RPC endpoints
(`bsc-testnet-rpc.publicnode.com`, `data-seed-prebsc-1-s1.bnbchain.org`) and
executing base64-encoded JavaScript loaded via `tag.js`. This behavior only
manifests on desktop browsers, not mobile, which is consistent with
fingerprint-gated malicious injection.

Since the application source contains no blockchain, web3, or wallet
dependencies, the injected code is not coming from our own code. This points
to one of:

1. A compromised npm dependency injecting malicious code at install or build
   time (postinstall script, prebuilt binary, etc.)
2. A supply chain attack affecting a package already present in
   `node_modules`
3. Build-level injection (e.g. compromised CI/build image or cached layer)

## What this PR does

`package-lock.json` has been removed to force a clean dependency resolution
and reinstall. This is the first, fastest step to purge any pinned,
compromised transitive dependency and to help isolate which package is
responsible.

## Action required after merge (for Denise)

1. Pull this branch/merge locally.
2. Delete your local `node_modules` directory if present:
   `rm -rf node_modules`
3. Run a completely fresh install: `npm install`
   This regenerates `package-lock.json` from scratch and downloads new
   copies of every package.
4. Commit the newly generated `package-lock.json`.
5. Redeploy to Railway with the fresh install.
6. Check the deployed site again. If the popup is gone, the issue was a
   compromised/cached package that has now been purged. If it still
   appears, the malicious code is more likely coming from a specific
   dependency's install/build script or from the build environment itself —
   at that point, audit `npm ls`, check for unexpected `postinstall` scripts
   in `node_modules/*/package.json`, and consider running `npm audit` plus a
   diff against the previous `package-lock.json` (available in git history)
   to identify which package version changed or was added recently.

Do not deploy without first regenerating and reviewing the new
`package-lock.json`.
