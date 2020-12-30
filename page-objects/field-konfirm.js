module.exports = {

    url: 'https://www.cermati.com/gabung',

    elements: {
        fieldKonfirm: by.xpath("//input[@id='confirm-password']")
        // fieldKataSandi: by.xpath("//input[@id='email-login']") // coba sengaja dierror    
    },

    performFill: function () {

        var selector = page.fieldKonfirm.elements.fieldKonfirm;
        return driver.findElement(selector).sendKeys(shared.id.konfirm);
    }
};