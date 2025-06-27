
export default class cookieController {

    static async getCookie(req, res) {
        const token = req.cookies.token;

        if (!token) {
            return res.status(404).json({ status: "fail", message: "cookie tidak tersedia, anda belum melakukan login.." });
        }

        res.status(200).json({
            status: "success",
            message: "cookie tersedia"
        })
    }

    static async clearCookie(req, res) {
        const token = req.cookies.token;

        if (!token) {
            return res.status(404).json({ status: "fail", message: "cookie tidak tersedia" });
        }

        res.clearCookie("token");
        res.status(200).json({
            status: "success",
            message: "cookie berhasil di hapus"
        })
    }
}