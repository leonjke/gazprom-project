package net.gazpromkitchen.server.service;

import net.gazpromkitchen.server.model.User;

import java.util.List;

public interface UserService {
    User register(User user);

    User setAvatar(Long id, String avatar);

    List<User> getAll();

    List<User> getTopRating(Integer size);

    User findByUsername(String username);

    User findById(Long id);

    User incrementPoint(Long id, Integer addPoints);

    void delete(Long id);
}
