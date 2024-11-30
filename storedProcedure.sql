CREATE OR REPLACE FUNCTION count_user_status_and_failed_attempts()
RETURNS TABLE(
    active_users INT,
    inactive_users INT,
    blocked_users INT
) AS $$
BEGIN
    -- Contar usuarios activos
    SELECT COUNT(*) INTO active_users
    FROM users
    WHERE status = 'active';

    -- Contar usuarios inactivos
    SELECT COUNT(*) INTO inactive_users
    FROM users
    WHERE status = 'inactive';

    -- Contar usuarios bloqueados
    SELECT COUNT(*) INTO blocked_users
    FROM users
    WHERE status = 'blocked';

    -- Devolver los resultados
    RETURN NEXT;
END;
$$ LANGUAGE plpgsql;




SELECT * FROM count_user_status_and_failed_attempts();


drop function  count_user_status_and_failed_attempts()
