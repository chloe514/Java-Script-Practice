let appData = {
    name: 'Gmail',
    mailboxes: [
        { name: 'inbox', emails: [{ subject: 'Hello', body: 'Hello there!' }, { subject: 'Meeting', body: 'Meeting at 4 PM.' }] },
        { name: 'starred', emails: [] },
        { name: 'snoozed', emails: [] },
        { name: 'important', emails: [] },
        { name: 'sent', emails: [{ subject: 'Copy', body: 'The copy is attached.' }] },
        { name: 'drafts', emails: [] },
        { name: 'junk', emails: [] },
        { name: 'chats', emails: [{ subject: 'Sarah: Hi!', body: 'Hi!' }, { subject: 'Bob: Hello!', body: 'Hello!' }] }
    ],
    categories: [
        { name: 'social' },
        { name: 'updates' },
        { name: 'forums' },
        { name: 'promotions' },
        { name: 'scheduled', emails: [{ subject: 'Meeting', body: 'Project discussion at 9 AM' }, { subject: 'Video Call', body: 'Video call at 2 PM' }] }
    ]
};


function getMailboxNames(appData) {
    return appData.mailboxes.map(mailbox => mailbox.name);
}


function getEmails(mailboxName, appData) {
    let mailbox = appData.mailboxes.find(mb => mb.name === mailboxName);
    return mailbox ? mailbox.emails : [];
}


function getSecondEmailText(mailboxName, appData) {
    let emails = getEmails(mailboxName, appData);
    return emails.length >= 2 ? emails[1].body : null;
}


function markEmailAsSent(mailboxName, emailIndex, appData) {
    let mailbox = appData.mailboxes.find(mb => mb.name === mailboxName);
    let sentMailbox = appData.mailboxes.find(mb => mb.name === 'sent');
    if (mailbox && sentMailbox && mailbox.emails[emailIndex]) {
        let email = mailbox.emails.splice(emailIndex, 1)[0];
        sentMailbox.emails.push(email);
    }
}


function addDraftEmail(subject, body, appData) {
    let draftsMailbox = appData.mailboxes.find(mb => mb.name === 'drafts');
    if (draftsMailbox) {
        draftsMailbox.emails.push({ subject: subject, body: body });
    }
}


console.log("Mailbox names:", getMailboxNames(appData)); 
console.log("Emails in inbox:", getEmails('inbox', appData)); 
console.log("Text of the second email in inbox:", getSecondEmailText('inbox', appData)); 

markEmailAsSent('inbox', 0, appData);
console.log("Emails in inbox after marking as sent:", getEmails('inbox', appData)); 
console.log("Emails in sent mailbox:", getEmails('sent', appData)); 

addDraftEmail('Draft', 'This is a draft email.', appData);
console.log("Emails in drafts mailbox:", getEmails('drafts', appData)); 

