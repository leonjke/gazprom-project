package net.gazpromkitchen.server.service;

import net.gazpromkitchen.server.model.Topic;

public interface TopicService {
    Topic create(Topic topic);

    Topic setServiceName(Long id, String name);

    Topic setShortName(Long id, String name);

    Topic setDescription(Long id, String name);

    Topic setQuantityUsers(Long id, Integer size);

    Topic setDestination(Long id, String name);

    Topic findById(Long id);

    void delete(Long id);
}
