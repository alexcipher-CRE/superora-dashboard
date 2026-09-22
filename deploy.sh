#!/bin/bash
export VERCEL_SCOPE="hermes-autonomous"

# Deploy with auto-linking disabled and production flag
vercel --prod --confirm \
  --prebuilt \
  --force \
  --token="$VERCEL_TOKEN" 2>&1 || \
vercel --prod --confirm --prebuilt --force 2>&1

