package net.gazpromkitchen.server.repository;

import net.gazpromkitchen.server.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopicsRepository extends JpaRepository<Topic, Long> {

}
