# StudyDesk

A local-first study desk with lessons, flashcards, practice tests and a document library.

## Move from the downloaded version
1. In the old copy, open Settings and export a backup.
2. Open the website in the browser you will keep using.
3. In Settings, restore that backup. Keep the exported file as a spare copy.

The website stores progress and documents in this browser. They do not sync between devices. External readings and PDFs require internet.

After the first online visit, the app shell is cached for offline use. When an update is ready, finish your current test and choose Reload to update. Saved data remains in browser storage.

## Publish an update
Build the standalone StudyDesk HTML, then run `node build.mjs path/to/StudyDesk.html`. The builder embeds update.js and derives the offline-cache version from the final HTML automatically. Commit the generated index.html and sw.js, then push to main; GitHub Pages deploys the site. Never commit personal backups or documents.

## Keep your data
Use the same browser and website address. Download a backup in Settings after important sessions and keep the JSON file somewhere safe. Restore it to move to a new browser or device. Updates preserve saved data; private browsing, clearing browser storage and device loss do not. A backup may contain private documents and project links, so keep it private. Backups up to 150 MB can be restored. Finish an active practice test before reloading; unfinished answers are not saved. Close other tabs once when moving from the first release.

## Learning scope
The embedded lessons are a revision guide, not a complete syllabus or an official exam. The course-coverage section links to additional exercises and the BC curriculum as an optional comparison. Teacher handouts are historical resources, not current class assignments. Content and links reviewed October 29, 2026.
