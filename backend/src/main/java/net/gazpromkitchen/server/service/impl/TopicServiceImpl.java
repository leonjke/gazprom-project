package net.gazpromkitchen.server.service.impl;

import lombok.extern.slf4j.Slf4j;
import net.gazpromkitchen.server.model.Topic;
import net.gazpromkitchen.server.model.User;
import net.gazpromkitchen.server.repository.TopicsRepository;
import net.gazpromkitchen.server.repository.UserRepository;
import net.gazpromkitchen.server.security.jwt.JwtUser;
import net.gazpromkitchen.server.service.TopicService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class TopicServiceImpl implements TopicService {
    private final TopicsRepository topicRepository;
    private final UserRepository userRepository;

    public TopicServiceImpl(TopicsRepository topicRepository, UserRepository userRepository) {
        this.topicRepository = topicRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Topic create(Topic topic) {
        Long id = ((JwtUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        User user = userRepository.findById(id).orElse(null);
        topic.setAuthor(user);
        topicRepository.save(topic);
        return topic;
    }

    @Override
    public Topic setServiceName(Long id, String name) {
        return null;
    }

    @Override
    public Topic setShortName(Long id, String name) {
        return null;
    }

    @Override
    public Topic setDescription(Long id, String name) {
        return null;
    }

    @Override
    public Topic setQuantityUsers(Long id, Integer size) {
        return null;
    }

    @Override
    public Topic setDestination(Long id, String name) {
        return null;
    }

    @Override
    public Topic findById(Long id) {
        return topicRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(Long id) {

    }
}
