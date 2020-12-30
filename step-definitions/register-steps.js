module.exports = function () {

    this.Given(/^user browse register page$/, function () {
        helpers.loadPage('https://www.cermati.com/gabung')
        // Write code here that turns the phrase above into concrete actions
    });

    this.Given(/^user fill Email field$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldEmail.performFill();
        })
    });

    this.Given(/^user fill Kata Sandi field$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldSandi.performFill();
        })
    });

    this.Given(/^user fill Konfirmasi Kata Sandi field$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldKonfirm.performFill();
        })
    });

    this.Given(/^user fill Nama Depan field$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldDepan.performFill();
        })
    });

    this.Given(/^user fill Nama Belakang field$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldBelakang.performFill();
        })
    });

    this.Given(/^user fill Nomor Telepon field$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldTelepon.performFill();
        })
    });

    this.When(/^user fill Kabupaten\/Kota field$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.fieldKabupatenkota.performFill();
        })
    });

    this.Then(/^user click Daftar Akun button$/, function () {
        // Write code here that turns the phrase above into concrete actions
        driver.then(function () {
            return page.daftarBtn.performClick();
        })
    });
}