sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'demo/bookshopapp/test/integration/FirstJourney',
		'demo/bookshopapp/test/integration/pages/BooksList',
		'demo/bookshopapp/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('demo/bookshopapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);