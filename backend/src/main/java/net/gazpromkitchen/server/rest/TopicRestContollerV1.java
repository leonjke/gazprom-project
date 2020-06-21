package net.gazpromkitchen.server.rest;

import io.swagger.v3.oas.annotations.Operation;
import net.gazpromkitchen.server.dto.TopicRequestDto;
import net.gazpromkitchen.server.model.Topic;
import net.gazpromkitchen.server.service.TopicService;
import net.gazpromkitchen.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/topic/")
public class TopicRestContollerV1 {
    private final TopicService topicService;
    private final UserService userService;

    @Autowired
    public TopicRestContollerV1(TopicService topicService, UserService userService) {
        this.topicService = topicService;
        this.userService = userService;
    }

    @Operation(summary = "Create of new Topic")
    @PostMapping("create")
    public ResponseEntity register(@RequestBody TopicRequestDto requestDto) {
        Map<Object, Object> response = new HashMap<>();
        Topic topic = requestDto.toTopic();
        topicService.create(topic);
        userService.incrementPoint(topic.getAuthor().getId(), 5);
        response.put("status", "ok");
        response.put("id", topic.getId());
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Update of existing topic")
    @PostMapping("update/{id}")
    public ResponseEntity<TopicRequestDto> updateTopicById(@PathVariable(name = "id") Long id, @RequestBody TopicRequestDto requestDto) {
        Topic topic = topicService.findById(id);
        if (topic == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        TopicRequestDto result = TopicRequestDto.fromTopic(topic);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "Get information about topic through ID")
    @GetMapping(value = "get/{id}")
    public ResponseEntity<TopicRequestDto> getTopicById(@PathVariable(name = "id") Long id) {
        Topic topic = topicService.findById(id);
        if (topic == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        TopicRequestDto result = TopicRequestDto.fromTopic(topic);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
