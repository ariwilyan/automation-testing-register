module.exports = {

    url: 'https://www.cermati.com/gabung',

    elements: {
        fieldDepan: by.xpath("//input[@id='first-name']")
        // fieldKataSandi: by.xpath("//input[@id='email-login']") // coba sengaja dierror    
    },

    performFill: function () {

        var selector = page.fieldDepan.elements.fieldDepan;
        return driver.findElement(selector).sendKeys(shared.id.depan);
    }
};