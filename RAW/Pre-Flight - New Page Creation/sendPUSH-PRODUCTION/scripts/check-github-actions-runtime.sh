#!/usr/bin/env bash

set -euo pipefail

workflow_dir=".github/workflows"

declare -a banned_refs=(
  "actions/checkout@v4"
  "actions/setup-node@v4"
  "gitleaks/gitleaks-action@v2"
  "cloudflare/wrangler-action@v3"
)

if command -v rg >/dev/null 2>&1; then
  search_cmd=(rg -nF)
else
  search_cmd=(grep -RFn)
fi

failures=0

for ref in "${banned_refs[@]}"; do
  if "${search_cmd[@]}" "uses: ${ref}" "${workflow_dir}" >/dev/null; then
    echo "Deprecated GitHub Action runtime detected: ${ref}"
    "${search_cmd[@]}" "uses: ${ref}" "${workflow_dir}"
    failures=1
  fi
done

if [[ "${failures}" -ne 0 ]]; then
  echo "Update the workflow to a Node 24-compatible action or replace it with a direct CLI step."
  exit 1
fi

echo "No banned GitHub Action versions found in ${workflow_dir}."
