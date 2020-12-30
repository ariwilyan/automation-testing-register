module.exports = {

    url: 'https://www.cermati.com/gabung',

    elements: {
        fieldEmail: by.xpath("//input[@id='email']")
        // fieldEmail: by.xpath("//input[@id='email-login']") // coba sengaja dierror    
    },

    performFill: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};