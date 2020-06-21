package net.gazpromkitchen.server.rest;

import io.swagger.v3.oas.annotations.Operation;
import net.gazpromkitchen.server.dto.AvatarDto;
import net.gazpromkitchen.server.dto.UserDto;
import net.gazpromkitchen.server.model.User;
import net.gazpromkitchen.server.security.jwt.JwtUser;
import net.gazpromkitchen.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/user/")
public class UserRestControllerV1 {
    private final UserService userService;

    @Autowired
    public UserRestControllerV1(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "Get information about user through ID")
    @GetMapping(value = "get/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Long id) {
        User user = userService.findById(id);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        UserDto result = UserDto.fromUser(user);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "Return current user's information")
    @GetMapping(value = "self")
    public ResponseEntity<UserDto> getCurrentUser() {
        Long id = ((JwtUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        User user = userService.findById(id);
        UserDto result = UserDto.fromUser(user);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "Set avatar for current user")
    @PostMapping(value = "set-avatar")
    public ResponseEntity setCurrentAvatar(@RequestBody AvatarDto avatar) {
        Long id = ((JwtUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
        User user = userService.setAvatar(id, avatar.getAvatar());
        user.setAvatar(avatar.getAvatar());
        Map<Object, Object> response = new HashMap<>();
        response.put("status", "ok");
        return ResponseEntity.ok(response);
    }
}
