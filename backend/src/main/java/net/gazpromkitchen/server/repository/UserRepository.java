package net.gazpromkitchen.server.repository;

import net.gazpromkitchen.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String name);
}
