package net.gazpromkitchen.server.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "topics")
@Data
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User author;

    @Column(name = "service_name")
    private String serviceName;

    @Column(name = "short_name")
    private String shortName;

    @Column(name = "description")
    private String description;

    @Column(name = "quantity_users")
    private Integer quantityUsers;

    @Column(name = "destination")
    private String destination;
}
