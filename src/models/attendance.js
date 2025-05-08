const supabase = require('../config/supabase');

class Attendance {
    static async findAll() {
        const { data, error } = await supabase
            .from('attendance')
            .select(`
                *,
                users (
                    name
                )
            `)
            .order('check_in', { ascending: false });
        
        if (error) throw error;
        return data.map(record => ({
            ...record,
            user_name: record.users.name
        }));
    }

    static async findById(id) {
        const { data, error } = await supabase
            .from('attendance')
            .select(`
                *,
                users (
                    name
                )
            `)
            .eq('id', id)
            .single();
        
        if (error) throw error;
        return {
            ...data,
            user_name: data.users.name
        };
    }

    static async create(attendanceData) {
        const { data, error } = await supabase
            .from('attendance')
            .insert([{
                ...attendanceData,
                check_in: new Date().toISOString()
            }])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    }

    static async update(id, attendanceData) {
        const { data, error } = await supabase
            .from('attendance')
            .update(attendanceData)
            .eq('id', id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    }

    static async delete(id) {
        const { error } = await supabase
            .from('attendance')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        return true;
    }
}

module.exports = Attendance; 