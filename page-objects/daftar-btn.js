module.exports = {

    url: 'https://www.cermati.com/gabung',

    elements: {
        daftarBtn: by.xpath("//button[normalize-space()='Daftar Akun']")
    },

    performClick: function () {

        var selector = page.daftarBtn.elements.daftarBtn;
        return driver.findElement(selector).click();
    }
};