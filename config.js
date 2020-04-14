module.exports = {
    "assignees": ["kevcraey"],
    "autodiscover": true,
    "autodiscoverFilter": "webcomponent([a-z]{2}|\-vl)",
    "enabledManagers": ["npm"],
    "labels": ["dependencies", "renovate", "chore"],
    "lockFileMaintenance": { "enabled": true },
    "masterIssue": true,
    "masterIssueAutoclose": true,
    "onboarding": false,
    "packageRules": [
        {
            "updateTypes": ["minor", "patch", "pin"],
            "automerge": true,
            "requiredStatusChecks": null
        }
    ],
    "reviewers": ["coemans", "cambiph", "wautergu", "pascalriquier", "SanderKleykens", "Pieter-Beckers"]
};


