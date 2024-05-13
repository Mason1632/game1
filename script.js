// Simulated Firewall Rules
const firewallRules = [
    {
        domain: 'mason1632.github.io',
        allow: true,
    },
    {
        domain: 'chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/',
        allow: false,
    },
];

// Firewall Function
function firewall(url) {
    const domain = new URL(url).hostname;

    for (rule of firewallRules) {
        if (domain.includes(rule.domain)) {
            if (rule.allow) {
                console.log(`Access granted to ${domain}`);
            } else {
                console.log(`Access denied to ${domain}`);
            }
            return;
        }
    }

    console.log(`No rules matched for ${domain}. Access granted by default.`);
}

// Test firewall with URLs
firewall('http://mason1632.github.io'); // Access granted to example.com
firewall('https://chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/'); // Access denied to blockedsite.com
firewall('http://unknownsite.com/page3'); // No rules matched for unknownsite.com. Access granted by default
