---
title: Integration review
description: All the information related to the integration review process during the Moodle development.
tags:
  - Processes
  - Core development
  - Integration
---

## Purpose

The purpose of the integration review is to:

- Ensure consistent quality across the codebase
- Ensure that pedagogical aims of Moodle are at the forefront of any change
- Take into consideration the holistic view of moodle, looking at the impact beyond where the - original developer was focused
- Provide guidance and feedback to developers, helping them learn and improve
- Consider **other perspectives** of other users perhaps not considered by original developers e.g.
  - Teachers
  - Students
  - Administrators
  - The Moodle mobile app
  - Third-party developers

## Integration Principles

Integration (non-technical but philosophical) principles (4-5 words determining if something has to be integrated/backported or no):

1. **safety**: if something does not look safe, stable, it won't land. Be conservative.
2. **security**: all security issues, if not breaking principle (1) will be integrated/backported to all security-supported versions.
3. **community**: Anything not useful for the community (or against it) won't be integrated/backported. We can measure the community as 10%HQ, 10%Partners, 10%Core developers, 20%Admins, 20%Teachers, 30%Students - not exact science, just one approximation, you know). Question yourself how the change will affect those groups and ensure positives are bigger always (only affected groups count). All community issues, if not breaking principles (1) and (2) will be integrated.
4. **typology**: bug fixes will be always integrated/backported to all the supported branches if none of the principles (1), (2) and (3) are violated. Also, partially-unsupported branches can receive some if they are important enough. Improvements and new features go, exclusively, to master only, that's the main reason for short release periods. We *MUST* not make exceptions to this.
5. **priority**: issues will be "ordered down" by priority down (where priority is a [mix of various factors](https://tracker.moodle.org/issues/?filter=14000), dynamic). And will be integrated in that order. If something has to be delayed, better if it is low priority. Once again, nothing here can break any of the previous principles.
6. **tests**: unit tests and acceptance tests will backported as much as possible without breaking (1) and (2). New features required to implement tests will be backported if the API is 100% backwards compatible.

If all the principles are fulfilled, the answer for "should I integrate this?" is, "yes, please!" (apart from technical findings, of course, that can lead to the issue being not integrated/reopened at last, these principles are 100% philosophical)

## Component lead review process

Please see the [Component Lead Review](https://docs.moodle.org/dev/Component_Lead_Review) documentation for further information on the CLR process.

## Integration Review Process

1. Run automated pre-checks against the continuous integration server. (In future this can be automated and also moved into a publicly
accessible domain.)
2. Final code review, much like the peer review, except that this is the final check. To include
   1. Takes place in-situ (integrated) to examine the impact to other integrated issues
   2. Checking against the coding guidelines - syntax/whitespace
   3. Moodleisms - using the built-in API functions where appropriate
   4. Cross-DB compatibility
   5. Security
3. Check purpose - the patch needs to fix the issue reported.
4. Verify target branches are appropriated. They must match 100% the rules defined for [backporting issues](#backporting).
5. Ensure backwards compatibility is maintained. As a starting point backwards compatibility must always be maintained. Where backwards
compatibility is affected it should be:
   1. Well discussed with evidence of justification
   2. Documented and communicated to the community
6. Ensure backwards compatibility with the Moodle mobile app. Especially in areas where the Moodle app uses pre-rendered content from
the site (like Quiz or Lesson)
7. Verify that components are correct and check the right people have been involved (e.g. component maintainers)
8. For fundamental changes, check that a thread has been started in an appropriate forum, and other Moodlers, given enough time to
comment.
9. Tests - must be written to guide tester to verify the fix is working.
   1. Unit test - very much preferred if applicable
   2. at end of Wednesday, ensure testing is going to complete as expected. else take other actions (speak to test manager)
10. Performance - we have to look at maintaining optimum code here, as far as simple patches that can affect performance. (simple
optimisations)
11. Scalability - if master only - we're looking far future, stable branches may not be lucky to get such improvements.
12. git authorship is correct vs committer + credits due are mentioned + email addresses
13. Documentation / PHP Doc / readability
14. [Tracker issue labels](/general/development/tracker/labels) which might need adding. Particularly:
    1. `docs_required` / `dev_docs_required` / `release_notes`: About which type of documentation is required for the issue.
    2. `ui_change` / `api_change`: About the implications of the change.
    3. `unit_test_required` / `acceptance_test_required` / `qa_test_required`: About the need to cover the issue with some test.
    4. `affects_mobileapp` / `affects_workplace` / `affects_moodlecloud`: About issues that may affect other Moodle products and services
15. [Tracker issue versions](https://docs.moodle.org/dev/Tracker_issue_versions) review. Particularly:
    1. Fixed Version after integration - is the versions that the issue is patched for. (A rule here: ["or stables or master"](https://docs.moodle.org/dev/Tracker_issue_versions#Some_general_and_simple_rules)).
    2. Remove any `Must fix for X.Y` version once the issue is integrated.
16. Whenever any of the points above or any other detail require extra information or action to be done by the assignee, and the integrator
considers that they can be fixed without needing to discard/reopen, the issue will be sent to `Waiting for feedback` with all the details to
complete. Once everything has been fulfilled, always within a reasonable amount of time (still to decide), the issue will be sent back to
integration by the assignee.
17. Assign the tester.
    1. Don't forget to update the weight in the testers sheet

## Schedule

### In normal periods

The integrators adhere to the following schedule: (links here should convert the times into your local timezone)

All the flow of issues to current integration is automatically controlled by the [Manage queues on normal job](https://ci.moodle.org/view/Tracker/job/TR%20-%20Manage%20queues%20on%20normal/) that keeps the current queue fed with issues, moves important ones and prioritises long awaiting issues. Issues are picked in strict integration order.

- Monday to Thursday until [12:00 (UTC+8)](http://time.unitarium.com/utc/4): Integration and [Testing](/general/development/process/testing/integrated-issues#the-testing-process) happen. Note that 24h before the cutoff it's possible to pick issues out of order towards queues reduction.
- Thursday after 12:00 (UTC+8): Integrators duties during this time are to monitor, facilitate and 'problem solve' the testing process.
- Friday: Testing should be completed before (the sooner the better) 12:00 (UTC+8) at which time remaining testing failures will be reverted/rewritten and reopened. The release process follows.
- Friday after [12:00 (UTC+8)](http://time.unitarium.com/utc/4): Should be kept free from integration. Integration systems are maintained during this time.

Note that under the strict schedule above, it is specially important **to be as responsive as possible**, both when the issue is being integrated and when [testing](/general/development/process/testing/integrated-issues#expectation-from-tester). Any significant delay by any of the actors involved will result in the issue being moved out from current integration.

### During continuous integration/Freeze/QA period

During the continuous integration period (last 6 weeks before release) the integration team are continuously focused on producing regular builds of master to facilitate QA and fast fixes to issues identified.

Throughout:

- Issues are picked on a one by one basis, prioritising [QA blockers](https://docs.moodle.org/dev/QA_testing#Resetting_tests) and master regressions (MUST FIX) issues.
- After freeze (usually 5 weeks before release) any non bug fix issues are given the `integration_held` label and are explicitly not picked for integration. Still, anybody is able to add a reasoned `unhold_requested` label to those issues in order to get them unblocked by the development managers. Note this does not guarantee the issue to land before release, but just gives it a chance to be integrated like any other issue.
- Also, coming together with freeze, all the flow of issues to current integration is automatically controlled by the [Manage queues on continuous](https://ci.moodle.org/view/Tracker/job/TR%20-%20Manage%20queues%20on%20continuous/) job that keeps the current queue fed with issues, moves important ones, holds new features and other niceties. Issues are picked in strict integration order.
- Our goal is to achieve 'release-ability' throughout, so we stop integrating to ensure a release happens

So, basically, once under continuous integration, we do organize work as follows:

- Continuous officially begins. Everybody is on integration. Until end of on-sync period.
- Monday: Integration and [testing](/general/development/process/testing/integrated-issues#differences-in-test-process-during-continuous-integration-periods) happens.
- Tuesday: Integration happens until [12:00 (UTC+8)](http://time.unitarium.com/utc/4), afterwards we try to [achieve 100% 'Test Passed'](/general/development/process/testing/integrated-issues#differences-in-test-process-during-continuous-integration-periods) and stop integrating any untested changes until a master release is produced.
- Wednesday: [Assuming a master release has been rolled] Integration and testing continues
- Thursday: Integration and testing continues
- Friday: Integration happens until [12:00 (UTC+8)](http://time.unitarium.com/utc/4), afterwards we try to achieve 100% 'Test Passed' and stop integrating any untested changes until a master release is produced. Note that 24h before the cutoff it's possible to pick issues out of order towards queues reduction.

:::note
Along this period we always release as many stable weeklies, both supported (always) and security only (when there are changes), as master rolls (on-demand, beta, rc) happen (see {tracker MDLSITE-3470}). Note that those tags are not simply tags but they come with some important implications, aiming to stability, safety and clarity. Integrators will try to remain loyal to them, be warned:
:::

- **Once beta is released**, new features or improvements "unrelated" with the release will be really harder to be accepted. A +4 from developer managers (normally +3 is enough) will be needed to proceed with the issue. Integrators vote will be, always, -1.
- **Once rc are released**, new features or improvements "unrelated" with the release are forbidden. No unhold voting, no managers. Simply forbidden.
- **Last week before release**, only "related" issues will be picked for integration. Everything else (bug fixes included) are kept out (given the "integration_held" label) if unrelated, at very least until after release. No distractions.

:::info
Definition: `related` said to be a followup of required/planned to release OR a direct (and recent) regression caused by a bug fix OR a security issue.
:::

### On-sync period

Immediately after a major release and for a short period (right now, 2 weeks, matching 1st HQ sprint duration), the integration team is under the named on-sync period.

At all effects, it's a normal period (see above), and weeklies are produced for supported stable branches and also for master. But with one important rule/goal:

- We must keep the latest stable branch and master 100% on-sync, specifically about versions and upgrade steps. Some well-known exceptions to this are: *.travis.yml*, *backup.class.php*, *config.php* (*$release*, *$branch*, *$maturity* and comments only, never *$version*!), *install/lang/xx files* (the new stable branch for install lang files is created 2w after the release).

This simple, but important constraint, is there to facilitate the integration of impeding bugs, needing urgent resolution, and by keeping them the same, we guarantee that any stable or master fix will apply without problems to both branches. Of course, in order to achieve the rule, these must be also observed along the period:

- We continuously perform diffs between the latest stable and master, controlling that we are on-sync. Any non-authorised difference is cleaned (rewritten). Whenever a latest stable branch is missing in the issue (it's optional over the period), we automatically cherry pick the changes straight from master.
- Both improvements and new features (and, in general, everything leading to divergence) are held until the on-sync period ends.

Last, but not less important, a second goal for this on-sync period is:

- The **environmental requirements for next major version** [must be agreed and resolved so they can land to master](https://docs.moodle.org/dev/Release_process#2_weeks_after) early in the process, remaining defined and stable over the next, 6 months of, development cycle.
As part of the standard [Moodle release process](https://docs.moodle.org/dev/Release_process), at the beginning of the on-sync period, we "unhold" all bugs that were held during the last week before the release because they were unrelated to the release. At the end of the onsync period we "unhold" all new features that were submitted after the code freeze for the the release.

## Backporting

Whilst we'd all like all Moodle users to be using our latest and greatest code, there is a balance to strike between improving our software and maintaining stability (both in terms of regressions, but also training and documentation materials). Large amounts of change on the stable branches make the lives difficult for institutions to manage upgrades between point releases.

### General policy

Our general policy is as follows:

- Bug fixes will be backported to all (and only to) supported stable branches.
  - When fixing a bug, please provide a fix for all supported stable branches.
  - If a fix doesn't make sense to be backported to every branch, please make it clear in the issue.
- Improvements or new features will only land in master.

### Process for requesting a non bug-fix backport

Improvements or new features can be requested to be backported to the stable branches. We urge developers to consider this request carefully. In recent years, Moodle has moved to a short and predictable time based release schedule and we use a very effective distributed source control system. Both of these process changes should ensure that a change not being backported to the stable branches is not as problematic as it may have used to be.

Should you feel that a new feature or improvement needs backporting, please follow this process:

1. File a new issue.
2. Set the issue title using our backport template guide. (i.e. "Fix forum alignment (backport of MDL-99999)").
3. Link the original issue using link type "Will help resolve".
4. You should include clear rationale for the request to backport

The integration team will process backport requests, with the following guidelines:

1. The integration team will together consider each request individually considering the needs of the community (influenced by forum posts, moodle partners, nagging developers etc).
2. Backports will happen not earlier than 3 weeks and not later than 2 months after the request was performed.
3. Rationale will be given for rejection

If the backport request is approved, please follow the usual development process to submit the feature or improvement on earlier branches. Just to be clear, this means using the new bug number. So, even if the fix you are back-porting cherry-picks cleanly, you will need to amend the commit comment to use the new MDL-XXXXX number.

:::tip
It would be good practice to also add a line like "This is a backport of MDL-YYYYY." in the amended commit comment.
:::

You can probably copy the testing instructions from the original issue. If so, make it clear you done this by saying something like "Copied from MDL-66327". Of course, if you can improve the instructions, feel free to edit. {tracker MDL-66614} and {tracker MDL-66327} are probably a reasonably good example fo what should be done.

### Polite note about bug classification

Many issues can be appropriately classified as borderline bug-fix/improvements. We politely request that developers do not try and 'game the system' by classifying their improvements as bugs intentionally. If your fix is in a grey area, please state your case for it being a bug fix clearly. The integration team will use their discretion where necessary.

### Backport fixes to unsupported branches

- Given the [general policy](#general-policy) above, only supported stable branches are candidates normally.
- Also security, privacy, data-loss and regressions caused by any of the previous issue types are accepted to be fixed into security-only supported branches.

:::note

This doesn't include [`security_benefit` labelled issues](/general/development/tracker/labels).

::::

- Apart from the previous, issues required to keep the testing infrastructure working and passing (travis, behat, phpunit, random failures, new steps availability...) will also be accepted when possible into security-only branches.
- Finally, backport to unsupported branches only will happen when the issue is a **direct regression caused by a bug fix** introduced by the very latest releases. This applies to both security-only and out-of-support branches.

A new weekly release will be performed including all the cases above, but [security issues that follow its own special process](/general/development/process#security-issues) and are released bi-monthly.

## Fixing issues identified during integration review/ testing

When a branch has been merged by an integrator, it is important that you do not modify the existing history of your branch (e.g. by amending or squashing your commits) and instead add new commits on top. If you modify the history of your branch, it makes it extremely difficult for the integrator to merge your changes (and see the differences).

As a general rule, this means that if your issue has entered the 'in integration review' stage of the development process, please only add new commits on top of your existing commits. There are circumstances when your issue will be 'in integration review' but not merged (and thus possible to squash changes) but if in any doubt, please add new commits and ask the integrator to squash your changes for you.

## Commit squashing

The Integration team will sometimes recommend squashing commits when things do not look natural (and may offer to do this for you), especially when there are "fix-commits" in the history happening before integration. You will not be forced to squash your changes because our policy is: *"If you want your history of commits to look like bad, it's your history."*.

:::tip
You should pay close attention to [Git_commits](/general/development/policies/codingstyle#git-commits) and intend to *"Tell a perfect, cleaned up version of the history. As if the code was written perfectly first time."*.
:::
