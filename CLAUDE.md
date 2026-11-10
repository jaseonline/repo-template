# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

{{DESCRIPTION}} <!-- One or two sentences: what this is and where it runs. -->

## Commands

<!-- Merge the block from stacks/<stack>/CLAUDE.commands.md, then edit. Keep only commands that actually work. -->

- Tests: `…`
- Lint / format: `…`
- Anything that touches live systems (deploys, writes to real devices or production data) is listed here and marked **don't run without asking**.

## Architecture rules

<!-- The few rules that aren't obvious from the code: source of truth, data flow, boundaries that must not be bypassed. Delete the examples. -->

- e.g. `src/…` is the source of truth; `…` is generated from it, so don't hand-edit it.
- e.g. Logs go to stderr only; stdout is the protocol stream.

## Gotchas

<!-- Things that cost time to discover. Each names the symptom and the fix. -->

- Credentials come from environment variables (see `.env.example`). Never write credentials into the repo.

## Versioning

<!-- Where the version lives and what must change together. The /release skill reads this section. -->

- Version lives in `…`. On release, move `CHANGELOG.md`'s Unreleased entries under the new version.

## Git

Short imperative one-line subjects (e.g. "Add retry to the fetch step"), committed straight to `main`. Never paste `git status` output as the message. Pull before committing. Don't push without explicit go-ahead; the push-guard hook asks before any push to `main`.
