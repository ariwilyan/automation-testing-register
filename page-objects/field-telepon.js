module.exports = {

    url: 'https://www.cermati.com/gabung',

    elements: {
        fieldTelepon: by.xpath("//input[@id='mobile-phone']")
        // fieldKataSandi: by.xpath("//input[@id='email-login']") // coba sengaja dierror    
    },

    performFill: function () {

        var selector = page.fieldTelepon.elements.fieldTelepon;
        return driver.findElement(selector).sendKeys(shared.id.telepon);
    }
};