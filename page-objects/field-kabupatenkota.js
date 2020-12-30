module.exports = {

    url: 'https://www.cermati.com/gabung',

    elements: {
        fieldKabupatenkota: by.xpath("//input[@id='residence-city']")
        // fieldKataSandi: by.xpath("//input[@id='email-login']") // coba sengaja dierror    
    },

    performFill: function () {

        var selector = page.fieldKabupatenkota.elements.fieldKabupatenkota;
        return driver.findElement(selector).sendKeys(shared.id.kabupatenkota);
    }
};