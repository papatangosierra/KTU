// Kodansha indesign utilities host script
// Paul Starr, June 2018

// Figure out which version of common lettering fonts this document is using.
var usedFonts = app.activeDocument.fonts;
var myCCWildWordsRom = '';
var myCCWildWordsItal = '';
var myCCWildWordsBoldItal = '';
var myCCComiccrazyRom = '';
var myCCComiccrazyItal = '';
var myCCComiccrazyBoldItal = '';
var myCCAstroCityRom = '';
var myCCAstroCityItal = '';
var myCCAstroCityBoldItal = '';

// Iterate over usedFonts in the current document; when we find a match for regular expressions
// matching the font name, we remember that font for later use.
for (var i=0; i < usedFonts.length; i++) {
    if (/wildwords/i.test(usedFonts[i].name) && /regular/i.test(usedFonts[i].name)) {
            myCCWildWordsRom = usedFonts[i];
    }
    if (/wildwords/i.test(usedFonts[i].name) && /ital/i.test(usedFonts[i].name)) {
            myCCWildWordsItal = usedFonts[i];
    }
    if (/wildwords/i.test(usedFonts[i].name) && /bold/i.test(usedFonts[i].name)) {
            myCCWildWordsBoldItal = usedFonts[i];
    }
    if (/comiccrazy/i.test(usedFonts[i].name) && /regular/i.test(usedFonts[i].name)) {
            myCCComiccrazyRom = usedFonts[i];
    }
    if (/comiccrazy/i.test(usedFonts[i].name) && /ital/i.test(usedFonts[i].name)) {
            myCCComiccrazyItal = usedFonts[i];
    }
    if (/comiccrazy/i.test(usedFonts[i].name) && /bold/i.test(usedFonts[i].name)) {
            myCCComiccrazyBoldItal = usedFonts[i];
    }
    if (/wildwords/i.test(usedFonts[i].name) && /regular/i.test(usedFonts[i].name)) {
            myCCWildWordsRom = usedFonts[i];
    }
    if (/wildwords/i.test(usedFonts[i].name) && /ital/i.test(usedFonts[i].name)) {
            myCCWildWordsItal = usedFonts[i];
    }
    if (/comiccrazy/i.test(usedFonts[i].name) && /bold/i.test(usedFonts[i].name)) {
            myCCWildWordsBoldItal = usedFonts[i];
    }
}


// GREP Shortcuts
// three dots -> typographical ellipsis
function fixEllipses() {
	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.findWhat = '\\.\\.\\.';
    app.changeGrepPreferences.changeTo = '~e';
    var myFoundItems = app.activeDocument.changeGrep();
}

// non-personal pronoun "I" to lower-case (unserifed) i in CCWildWords and CCAstroCity, all variants
function fixUnserif() {
	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.appliedFont = myCCWildWordsRom;
    app.findGrepPreferences.findWhat = '([a-zA-Z]+)?I([a-zA-Z]+)';
    app.changeGrepPreferences.changeTo = '$1i$2';
    var myFoundItems = app.activeDocument.changeGrep(); // we may as well keep track of found items
    
	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.appliedFont = myCCWildWordsItal;
    app.findGrepPreferences.findWhat = '([a-zA-Z]+)?I([a-zA-Z]+)';
    app.changeGrepPreferences.changeTo = '$1i$2';
    myFoundItems.push(app.activeDocument.changeGrep());

	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.appliedFont = myCCWildWordsBoldItal;
    app.findGrepPreferences.findWhat = '([a-zA-Z]+)?I([a-zA-Z]+)';
    app.changeGrepPreferences.changeTo = '$1i$2';
    myFoundItems.push(app.activeDocument.changeGrep());
    
	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.appliedFont = myCCAstroCityRom;
    app.findGrepPreferences.findWhat = '([a-zA-Z]+)?I([a-zA-Z]+)';
    app.changeGrepPreferences.changeTo = '$1i$2';
    myFoundItems.push(app.activeDocument.changeGrep());
    
	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.appliedFont = myCCAstroCityItal;
    app.findGrepPreferences.findWhat = '([a-zA-Z]+)?I([a-zA-Z]+)';
    app.changeGrepPreferences.changeTo = '$1i$2';
    myFoundItems.push(app.activeDocument.changeGrep());

	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.appliedFont = myCCAstroCityBoldItal;
    app.findGrepPreferences.findWhat = '([a-zA-Z]+)?I([a-zA-Z]+)';
    app.changeGrepPreferences.changeTo = '$1i$2';
    myFoundItems.push(app.activeDocument.changeGrep());
}

// Find left single quotes preceding "sup" and "cause" and change to right single quotes
// (i.e., apostrophes)
function fixCause() {
	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.findWhat = '(~[)([Ss]up|[Cc]ause|[Cc]os|[Tt]il)';
    app.changeGrepPreferences.changeTo = "~'$2";
    var myFoundItems = app.activeDocument.changeGrep();
}

// Find personal pronoun "I" characters in CCComiccrazy, and change to the pipe "|" character,
// which that font uses to generate a serifed "I".
function fixUnserif() {
	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.appliedFont = myCCComiccrazyRom;
    app.findGrepPreferences.findWhat = "(^| )([iI])([ |'|,|.|-|—|!|?|~e])";
    app.changeGrepPreferences.changeTo = '$1|$3';
    var myFoundItems = app.activeDocument.changeGrep();

	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.appliedFont = myCCComiccrazyItal;
    app.findGrepPreferences.findWhat = "(^| )([iI])([ |'|,|.|-|—|!|?|~e])";
    app.changeGrepPreferences.changeTo = '$1|$3';
    myFoundItems.push(app.activeDocument.changeGrep());

	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.appliedFont = myCCComiccrazyBoldItal;
    app.findGrepPreferences.findWhat = "(^| )([iI])([ |'|,|.|-|—|!|?|~e])";
    app.changeGrepPreferences.changeTo = '$1|$3';
    myFoundItems.push(app.activeDocument.changeGrep());
}

function fixOrdinals() {
	app.changeGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences = NothingEnum.nothing;
    app.findGrepPreferences.findWhat = '(?<=\\d)(st|nd|rd|th)'; // Remember that backslashes in regular expressions stored in .findWhat have to be escaped in order to be properly passed! Which is BANANAS
    app.changeGrepPreferences.changeTo = '$1';
    app.changeGrepPreferences.position = Position.SUPERSCRIPT;
    myFoundItems.push(app.activeDocument.changeGrep());
}


// EXPORT SHORTCUTS

// takes a space-delineated list of page numbers as its argument.
function exportIndividualPages(pagesString) {
    pageNumbers = pagesString.split(" ") // parse apart string received from panel
    for (var i = 0; i < pageNumbers.length; i++) {
        app.pdfExportPreferences.pageRange = pageNumbers[i].toString(); // select current page
        var myExportPreset = app.pdfExportPresets.item('Kodansha')
        if (app.activeDocument.documentPreferences.pageBinding == PageBindingOptions.leftToRight) { // If the book is bound left-to-right, it's also going to be lettered bottom-to-top, which means we can take the document page number to be the sequence number
            app.activeDocument.exportFile(ExportFormat.PDF_TYPE, File(app.activeDocument.filePath + '/' + app.activeDocument.filePath.displayName + "_seq " + pageNumbers[i].toString()), false, myExportPreset); // export current page with sequence number appended to filename
        }
        else { // if the book is bound right-to-left, it's lettered top-to-bottom, which means we need to derive the sequence number for file naming
            var sequenceNumber = (app.activeDocument.pages.length + 1) - parseInt(pageNumbers[i]); // The last page in the document would be sequence 1
            app.activeDocument.exportFile(ExportFormat.PDF_TYPE, File(app.activeDocument.filePath + '/' + app.activeDocument.filePath.displayName + "_seq " + sequenceNumber.toString()), false, myExportPreset); // export current page with sequence number appended to filename
        }   
    }
}

// Pagination and layout utilities

// Reverse Binding Direction (uses ternary operator!! bc i'm so clever)
function reverseBindingDirection() {
    app.activeDocument.documentPreferences.pageBinding = 
        (app.activeDocument.documentPreferences.pageBinding == PageBindingOptions.rightToLeft) ?
            app.activeDocument.documentPreferences.pageBinding = PageBindingOptions.leftToRight : 
            app.activeDocument.documentPreferences.pageBinding = PageBindingOptions.rightToLeft;
}

function reversePageOrder() {
    var refpage = 0;
    for (var i = 0; i < app.activeDocument.spreads.length; i++) { // move by spread, not page, so as not to fuck up formatting
        if (i != 0) {
            targetpage = app.activeDocument.spreads[i];
            targetpage.move(LocationOptions.BEFORE, refpage);
            refpage = targetpage;
        } else {
            refpage = app.activeDocument.spreads[i];
        }
    }
}


// Object utilities

function unlockAllItems() {
    app.activeDocument.pages.everyItem().pageItems.everyItem().locked = false;
}
