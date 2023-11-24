package com.gyc.spring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Formulario extends BaseEntity{
    
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "eventoId")
    private Evento evento;

    @Column(length = 100, nullable = false)
    private String type;

    @Column(length = 100, nullable = false)
    private String ask;

    @Column(length = 100, nullable = false)
    private Boolean required;

    @Column(length = 100, nullable = true)
    private String[] options;
}