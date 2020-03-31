module.exports = {
    "assignees": ["kevcraey"],
    "autodiscover": true,
    "autodiscoverFilter": "milieuinfo/webcomponent-vl-ui*",
    "enabledManagers": ["npm"],
    "labels": ["dependencies", "renovate", "chore"],
    "lockFileMaintenance": { "enabled": true },
    "masterIssue": true,
    "masterIssueAutoclose": true,
    "onboarding": false,
    "packageRules": [
        {
            "updateTypes": ["minor", "patch"],
            "automerge": true,
            "requiredStatusChecks": null
        }
    ],
    "reviewers": ["coemans", "cambiph", "wautergu", "pascalriquier", "SanderKleykens", "Pieter-Beckers"]
};


