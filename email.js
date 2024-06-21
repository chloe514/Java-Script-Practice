// Create an object that models the data of your favorite email application 
// Define an object named appData representing email application data
let appData = {
    name: 'Gmail', // Name of the email application
    mailboxes: [
        { name: 'inbox', emails: [{ subject: 'Hello', body: 'Hello there!' }, { subject: 'Meeting', body: 'Meeting at 4 PM.' }] }, // Inbox with emails
        { name: 'starred', emails: [] }, // Starred emails section initially empty
        { name: 'snoozed', emails: [] }, // Snoozed emails section initially empty
        { name: 'important', emails: [] }, // Important emails section initially empty
        { name: 'sent', emails: [{ subject: 'Copy', body: 'The copy is attached.' }] }, // Sent emails section with one email
        { name: 'drafts', emails: [] }, // Drafts section initially empty
        { name: 'junk', emails: [] }, // Junk emails section initially empty
        { name: 'chats', emails: [{ subject: 'Sarah: Hi!', body: 'Hi!' }, { subject: 'Bob: Hello!', body: 'Hello!' }] } // Chats section with emails
    ],
    categories: [
        { name: 'social' }, // Social category
        { name: 'updates' }, // Updates category
        { name: 'forums' }, // Forums category
        { name: 'promotions' }, // Promotions category
        { name: 'scheduled', emails: [{ subject: 'Meeting', body: 'Project discussion at 9 AM' }, { subject: 'Video Call', body: 'Video call at 2 PM' }] } // Scheduled category with emails
    ]
};

// Function to get an array of mailbox names from appData
function getMailboxNames(appData) {
    return appData.mailboxes.map(mailbox => mailbox.name);
}

// Function to get emails from a specific mailbox in appData
function getEmails(mailboxName, appData) {
    let mailbox = appData.mailboxes.find(mb => mb.name === mailboxName);
    return mailbox ? mailbox.emails : [];
}

// Function to get the body of the second email in a specific mailbox in appData
function getSecondEmailText(mailboxName, appData) {
    let emails = getEmails(mailboxName, appData);
    return emails.length >= 2 ? emails[1].body : null;
}

// Function to mark an email as sent by moving it from one mailbox to the 'sent' mailbox in appData
function markEmailAsSent(mailboxName, emailIndex, appData) {
    let mailbox = appData.mailboxes.find(mb => mb.name === mailboxName);
    let sentMailbox = appData.mailboxes.find(mb => mb.name === 'sent');
    if (mailbox && sentMailbox && mailbox.emails[emailIndex]) {
        let email = mailbox.emails.splice(emailIndex, 1)[0]; // Remove the email from its original mailbox
        sentMailbox.emails.push(email); // Add the email to the 'sent' mailbox
    }
}

// Function to add a draft email to the 'drafts' mailbox in appData
function addDraftEmail(subject, body, appData) {
    let draftsMailbox = appData.mailboxes.find(mb => mb.name === 'drafts');
    if (draftsMailbox) {
        draftsMailbox.emails.push({ subject: subject, body: body }); // Add the new draft email to the 'drafts' mailbox
    }
}

// Testing the functions by logging results to the console
console.log("Mailbox names:", getMailboxNames(appData)); // Log all mailbox names
console.log("Emails in inbox:", getEmails('inbox', appData)); // Log emails in the 'inbox' mailbox
console.log("Text of the second email in inbox:", getSecondEmailText('inbox', appData)); // Log the body of the second email in the 'inbox' mailbox

markEmailAsSent('inbox', 0, appData); // Mark the first email in the 'inbox' mailbox as sent
console.log("Emails in inbox after marking as sent:", getEmails('inbox', appData)); // Log emails in the 'inbox' mailbox after marking one as sent
console.log("Emails in sent mailbox:", getEmails('sent', appData)); // Log emails in the 'sent' mailbox

addDraftEmail('Draft', 'This is a draft email.', appData); // Add a new draft email to the 'drafts' mailbox
console.log("Emails in drafts mailbox:", getEmails('drafts', appData)); // Log emails in the 'drafts' mailbox


