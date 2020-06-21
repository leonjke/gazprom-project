package main

import (
	"net/http"
	"fmt"
	"strconv"
	"time"

	c "../pkg/calendar"
	"../pkg/configer"
	"../pkg/logger"

)

func main() {

	cfg := configer.ReadConfig()

	fmt.Println(cfg.LogFile)
	fmt.Println(cfg.HttpListen)
	log := logger.NewLogger(cfg.LogFile, cfg.LogLevel)

	calendar := c.NewCalendar()

	http.HandleFunc("/add", func(w http.ResponseWriter, r *http.Request) {
		event := &c.Event{
			Id:          1,
			Title:       "Morning coffee",
			Description: "The most important event of the day",
			Date:        time.Now(),
		}
		_ = calendar.Add(event)
		log.Println("added new event")
	})

	http.HandleFunc("/delete", func(w http.ResponseWriter, r *http.Request) {
		eventId := r.URL.Query().Get("id")
		if eventId != "" {
			id, _ := strconv.Atoi(eventId)
			err := calendar.Delete(id)
			if err != nil {
				log.Println("Не смог удалить", err)
			}
			log.Println("delete event " + eventId)
		}
	})

	err := http.ListenAndServe(cfg.HttpListen, nil)
	if err != nil {
		log.Fatalf("http server error: %v", err)
	}
}

