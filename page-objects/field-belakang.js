module.exports = {

    url: 'https://www.cermati.com/gabung',

    elements: {
        fieldBelakang: by.xpath("//input[@id='last-name']")
        // fieldKataSandi: by.xpath("//input[@id='email-login']") // coba sengaja dierror    
    },

    performFill: function () {

        var selector = page.fieldBelakang.elements.fieldBelakang;
        return driver.findElement(selector).sendKeys(shared.id.belakang);
    }
};