const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

module.exports = {
    getConnection() {
        return createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_SECRET_KEY
        );
    },
};
