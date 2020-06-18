module.exports = {
    "assignees": ["kevcraey"],
    "autodiscover": true,
    "autodiscoverFilter": "milieuinfo/webcomponent+(-vl-ui*|en-vl*)",
    "enabledManagers": ["npm"],
    "ignoreDeps": ["replace", "terser"],
    "labels": ["dependencies", "renovate", "chore"],
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
    "rangeStrategy": "replace",
    "reviewers": ["coemans", "cambiph", "wautergu", "pascalriquier", "SanderKleykens", "Pieter-Beckers"]
};


