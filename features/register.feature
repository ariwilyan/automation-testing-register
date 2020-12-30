# ./features/register.feature

Feature: Register on the website Cermati.com
    As a user
    I want to be able to register on the website Cermati.com

    @success
    Scenario: User success to register on the website of Cermati.com
        Given user browse register page
        And user fill Email field
        And user fill Kata Sandi field
        And user fill Konfirmasi Kata Sandi field
        And user fill Nama Depan field
        And user fill Nama Belakang field
        And user fill Nomor Telepon field
        When user fill Kabupaten/Kota field
        Then user click Daftar Akun button