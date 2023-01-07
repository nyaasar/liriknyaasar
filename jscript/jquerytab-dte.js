$(function() {
    $('#tab-wrapper li:first').addClass('active'); // Tambahkan class='active' pada tab pertama
    $('#tab-body > div').hide(); // Sembunyikan konten tab
    $('#tab-body > div:first').show(); // Tapi tampilkan konten tab yang pertama
    // Saat tab diklik...
    $('#tab-wrapper a').click(function() {
        // Hilangkan kelas 'active' pada tab yang ditemukan
        $('#tab-wrapper li').removeClass('active');
        // Terapkan kelas 'active' pada tab yang diklik
        $(this).parent().addClass('active');
        var activeTab = $(this).attr('href'); // Dapatkan ID dari URL
        // Sembunyikan konten tab
        $('#tab-body > div:visible').hide();
        // Tampilkan konten tab dengan ID yang sama berdasarkan URL tab yang diklik
        $(activeTab).show();
        return false;
    });
});
