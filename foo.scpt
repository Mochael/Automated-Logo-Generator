
tell application "Adobe Illustrator"
     -- 'do javascript' runs any arbitrary JS.
     -- We're using the #include feature to run another
     -- file. (That's an Adobe extension to JS.)
     --
     -- You have to pass a full, absolute path to #include.
     --
     -- The documentation alleges that 'do javascript'
     -- can be passed an AppleScript file object, but
     -- I wasn't able to get that to work.

     do javascript "#include /Users/Tanishq/Documents/ALG/Automated-Logo-Generator/Illustratorscript.js"

end tell
