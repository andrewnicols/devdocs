---
title: Moodle App Overview
sidebar_label: Overview
sidebar_position: 1
tags:
  - Moodle App
---

The Moodle App is a mobile application that helps users make the best of their Moodle sites on handheld devices. It has some additional features like offline access, and a dedicated interface adapted to mobile. It's focused on student functionality, so you won't find all the features you have on the web for teachers and admins. You can learn more about the features available in [the user documentation](https://docs.moodle.org/).

On a technical level, it's a completely different codebase from the Moodle LMS, and interacts with a Moodle site using [web services](https://docs.moodle.org/dev/web_services). You can find the source code of the application in github: [github.com/moodlehq/moodleapp](https://github.com/moodlehq/moodleapp).

Before embarking into any Moodle-specific documentation, we recommend that you are at least familiar with [Angular](https://angular.io/) and [Ionic Framework](https://ionicframework.com/). These are the core technologies used in the application. We'll reference any relevant concepts, but having a basic idea will take you a long way in understanding the Moodle App.

## Basic concepts

### How does it work?

When you are accessing a Moodle site on the web, you are only capable of using one site at a time. In contrast to that, the Moodle App can be used with multiple sites at once. However, you will need to switch sessions to interact with each site, so you won't be able to use multiple sites simultaneously (but you'll continue receiving push notifications and reminders for all the sites connected in the app).

This works because the app is not coupled to any specific Moodle site, it acts as a client that will connect with a site after logging in; using the site url and user credentials. Compared to the Moodle LMS, users can always use the latest version of the app even if the site is running an old version. Some features may be missing or change depending on the version of the site, but it will work the same way for the most part.

The app can also be compiled to work with a single site, or a list of approved sites. Which may be desirable for building custom applications. For most people though, [the official app from MoodleHQ](https://moodle.com/app/) will be sufficient because it's not restricted to any site.

Keep in mind that the application only works with moodle sites that allow it, and this is disabled by default. If you want to allow users to log into your site using the app, make sure to [enable it in the settings](https://docs.moodle.org/en/Moodle_app_guide_for_admins#Enable_mobile_services_on_your_site). If you are not the site owner, reach out to the administrators.

### Architecture

The code of the application follows an [hexagonal architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)), with core modules that include the main functionality and addon modules that provide additional features.

Class names are prefixed by their module, so that you can identify whether you're working with something in core or an addon. For example, `CoreCourseProvider` is a core service implementing course features, while `AddonMessagesProvider` is an addon service related with messaging.

These modules are defined as [Angular Modules](https://angular.io/guide/architecture-modules), and they are resolved at runtime using [Angular's dependency injection framework](https://angular.io/guide/architecture-services).

Pages and navigation are defined using [Angular Router](https://angular.io/guide/routing-overview), making heavy use of [lazy loading](https://angular.io/guide/lazy-loading-ngmodules).

### Web services and caching

The entire communication between the app and a site happens through a layer of [web services](https://docs.moodle.org/dev/Web_services). Each time a user logs into the application, a new session starts and that session is what the concept of a "site" encapsulates in the application. For this reason, you could log multiple times into the same site and from the point of view of the application those would be different sites.

For performance reasons, the data retrieved from some web services is cached automatically. For example, the list of courses that a user is enrolled in. This is also useful so that the application works offline. However, not everything is cached automatically, and some things like entire courses can be downloaded manually. This is referred to as "prefetching".

When a user logs out from a site, or their session expires, this data will remain in the device but won't be accessible without logging in again. In order to remove all the data, they should delete the site from the list of sites the app is connected to.

In some situations, the cached data can also be refreshed. For example, many screens support the pull-to-refresh gesture, and downloaded data can be refreshed using similar controls to the ones used to prefetch in the first place.

### Delegates and handlers

Delegates and handlers are what allows some parts of the app to be easily extendable. This system allows addons to be as independent from core as possible. Since the core features don't know which addons will be active, each addon is responsible to tell core which functionality they extend.

A delegate is an Angular service that allows other instances to be registered. The instances registered in a delegate are called handlers. Each feature that can be extended will have a delegate service.

For example, the tabs displayed at the bottom or left of the app are extendable, addons can add their own tabs. To do so, the app defines a delegate named `CoreMainMenuDelegate` that will contain the list of handlers that want to display a tab. Each addon that wants to display a tab will need to create a handler and register it in the `CoreMainMenuDelegate` during the [Angular initialisation process](https://angular.io/api/core/APP_INITIALIZER).

The app has two types of delegates:

- Delegates that return an array of handlers. Features related to this delegates will display a list, and so the handlers are placed in an array and ordered by priority. For example, the `CoreMainMenuDelegate` belongs to this type since we have a list of tabs to display.
- Delegates where the handlers are indexed by a unique key. In this case, delegates will return the handler associated with the key instead of a list of handlers. For example, `CoreCourseModuleDelegate` is a delegate to handle course modules (activities or resources). Each handler needs to indicate which module it handles with the key, for example `quiz`. When the app needs to open a module, it will use the right handler.

### Site plugins

Moodle plugins can also be adapted to work with the mobile app. Given that more than one site can be used with the app, the plugins that are activated depend on the site the app is connected to. That's why they are called site plugins.

When the application connects with a site, it will fetch information about which plugins have mobile support and register their functionality using [the delegates system](#delegates-and-handlers). Plugins can be written using only PHP, but javascript is also supported for some advanced use-cases.

## Platform Support

The Moodle App only works with Moodle sites running version 3.1 or newer.

The minimum platforms supported by the application are Android 5.1 (with Webview 61 or higher) and iOS 11.

Browsers are not officially supported, but you can use a Chromium-based browser for development if you don't need any native functionality. However, there are [some caveats](./development/setup/app-in-browser) you should be aware of.

## Where to go next

Now that you are familiar with the basic concepts, you understand how the application works, and you've got your development environment set up; you're ready to embark into the particulars of what you're trying to achieve.

- Do you want to contribute to the core? Read the [Moodle App Development guide](./development/development-guide).
- Do you want to adapt a plugin to mobile? Read the [Moodle App Plugins development guide](./development/plugins-development-guide).
- Do you want to customise your site in the app? Read the [Moodle App Customisation](./customisation) page.
- Do you want to make a custom app? Read the [Custom Moodle Apps](./customisation/custom-apps) page.

If you have any further questions, check out [Moodle App FAQ|the FAQ](./faq). If there's anything you want to share, you can do it in [the forum](https://moodle.org/mod/forum/view.php?id=7798) or [the Telegram developer room](https://docs.moodle.org/dev/Chat). You can also report any bugs that you find in [the tracker](https://tracker.moodle.org/browse/MOBILE).
