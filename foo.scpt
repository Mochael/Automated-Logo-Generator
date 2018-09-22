set brandInput to display dialog "Enter desired Brand Name" default answer "" buttons {"No preference", "Ok"} default button "Ok"
if (button returned of brandInput = "No preference") then
	set brandReturned to ""
else
	set brandReturned to text returned of brandInput
end if
get brandReturned

set imagePath to display dialog "Drag Image into box below" default answer "" buttons {"Cancel", "Ok"} default button "Ok" cancel button "Cancel"


set textStyleList to {"fancy", "friendly", "kidly"}
set chosenTextStyle to choose from list textStyleList with prompt "Select font style" cancel button name "No preference"

--set varTest to do javascript "/Users/michaelkronovet/Desktop/Automated-Logo-Generator/Azure.js"

tell application "Terminal"
	do script "/Users/Tanishq/Documents/ALG/Automated-Logo-Generator/Azure.js"
end tell

--tell application "Adobe Illustrator"
-- 'do javascript' runs any arbitrary JS.
-- We're using the #include feature to run another
-- file. (That's an Adobe extension to JS.)
--
-- You have to pass a full, absolute path to #include.
--
-- The documentation alleges that 'do javascript'
-- can be passed an AppleScript file object, but
-- I wasn't able to get that to work.
-- do javascript "#include /Users/Tanishq/Documents/ALG/Automated-Logo-Generator/Illustratorscript.js"
--end tell

display dialog "Check your ___ folder for the files!" buttons {"Ok"} default button "Ok"
set likedImageLocation to display dialog "If you liked an image, drag it into box below" default answer "" buttons {"Didn't like an image", "Ok"} default button "Ok"
tell application "Finder"
	copy file likedImageLocation to folder SavedImages
end tell
if (button returned of likedImageLocation = "Didn't like an image") then
	set likedImage to false
else
	set likedImage to text returned of likedImageLocation
	set likedPartsList to {"shape type", "orientation", "colors", "style", "name"}
	set likedParts to choose from list likedPartsList with prompt "Select what you liked" cancel button name "Nothing" with multiple selections allowed
end if
