#!/bin/bash -e

operator_version=$1

# Check for uncommitted changes. New files are allowed.
if [[ -n $(git status --porcelain | grep '^[ M][MDA]') ]]; then
    echo "Warning: You have uncommitted changes in tracked files. Please commit or stash them before running this script."
    exit 1
fi

git checkout main
git pull
branch="bump-operator-$operator_version"
git checkout -b $branch

# Replace version in ./operator folder, but keep legacy ./operator-v3 folder unchanged
find ./operator -type f -name "*.mdx" \
    -exec sed -i '' -E \
    "s/v3-operator:v[0-9]+\.[0-9]+\.[0-9]+/v3-operator:$operator_version/g" {} +

git commit -am "Bump operator version to $operator_version"
git push --set-upstream origin $branch
