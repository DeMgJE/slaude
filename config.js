const config = {
    TOKEN: process.env.TOKEN,
    COOKIE: process.env.COOKIE,
    TEAM_ID: process.env.TEAM_ID,
    CHANNEL: process.env.CHANNEL,
    CLAUDE_USER: process.env.CLAUDE_USER,

    MAINPROMPT_LAST: process.env.MAINPROMPT_LAST  === 'true', // Will try to move the main prompt (main + nsfw prompt from SillyTavern) to the bottom, similar to a jailbreak
    MAINPROMPT_AS_PING: process.env.MAINPROMPT_AS_PING  === 'true', // Will use the main prompt as the ping message, if this true the PING_MESSAGE setting is ignored. Overrides MAINPROMPT_LAST.
    
    // If false will make Slaude send messages as plain text rather than through Slack's blocks format. The results in Slack should be the same either way.
    USE_BLOCKS: process.env.USE_BLOCKS  === 'true',

    STREAMING_TIMEOUT: 240000, //Time in milliseconds after which the response stream will force close itself, 0 disables the timeout but is not recommended.

    // The final message we send with an @Claude ping to trigger his response. You can add "@Claude" to this string to control where the ping will be inside the message.
    // If there is no @Claude, the ping will automatically get added in front of the message.
    // Can be whatever you want it to be but keep in mind that it might result in unpredictable responses.
    // Anything we put here will eat into our max available tokens so keep it brief.
    PING_MESSAGE: process.env.PING_MESSAGE,

    PORT: 5004
}

export default config;
