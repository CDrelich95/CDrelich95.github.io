---
language: enUS
title: FAQs
description: Downloading and installing ArmA3Sync with an initial setup procedure.
---

# Frequently Asked Questions

Here you will find answers to common questions.

## Unable to connect to repository

Make sure you entered the correct [public auto-config URL](./configuration.md#add-remote-repositories).

## Download gets stuck

Sometimes the progress bar freezes when downloading large mod files.
- Restart ArmA3Sync.
- Open the mod folder that is being synced and see if the file size is increasing.
- Try syncing one mod at a time.

## Event content missing

- Make sure you have synchronised all repositories and events in the Repositories tab.
- Restart ArmA3Sync. Your modsets will automatically synchronise.

## "cyp_pushtohear_a3" error when launching game

`Include file userconfig\cyp_pushtohear_a3\cyp_pushtohear_a3_config.hpp not found`
1. Go to your root **Arma 3** folder, then open **@cyp_pushtohear_a3**.
2. Copy the **userconfig** folder and paste it to your root **Arma 3** folder.