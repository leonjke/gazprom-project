package net.gazpromkitchen.server.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import net.gazpromkitchen.server.model.Topic;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class TopicRequestDto {

    private String servicename;
    private String shortname;
    private String description;
    private Integer quantityUsers;
    private String destination;

    public Topic toTopic() {
        Topic topic = new Topic();
        topic.setServiceName(servicename);
        topic.setShortName(shortname);
        topic.setDescription(description);
        topic.setQuantityUsers(quantityUsers);
        topic.setDestination(destination);
        return topic;
    }

    public static TopicRequestDto fromTopic(Topic topic) {
        TopicRequestDto topicDto = new TopicRequestDto();
        topicDto.servicename = topic.getServiceName();
        topicDto.shortname = topic.getShortName();
        topicDto.description = topic.getDescription();
        topicDto.quantityUsers = topic.getQuantityUsers();
        topicDto.destination = topic.getDestination();
        return topicDto;
    }
}
