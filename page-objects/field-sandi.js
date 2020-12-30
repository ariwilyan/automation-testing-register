module.exports = {

    url: 'https://www.cermati.com/gabung',

    elements: {
        fieldSandi: by.xpath("//input[@id='password']")
        // fieldKataSandi: by.xpath("//input[@id='email-login']") // coba sengaja dierror    
    },

    performFill: function () {

        var selector = page.fieldSandi.elements.fieldSandi;
        return driver.findElement(selector).sendKeys(shared.id.sandi);
    }
};