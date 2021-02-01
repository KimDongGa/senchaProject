/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Study.Application',

    name: 'Study',

    requires: [
        // This will automatically load all classes in the Study namespace
        // so that application classes do not need to require each other.
        'Study.*'
    ],

    // The name of the initial view to create.
    mainView: 'Study.view.main.Main'
});
