package com.gyc.spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gyc.spring.dto.FormularioDTO;
import com.gyc.spring.service.FormularioService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/formulario")
public class FormularioController {

    private final FormularioService service;

    @GetMapping
    public ResponseEntity<List<FormularioDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<FormularioDTO>> findByEvento(@PathVariable Long id) {
        return ResponseEntity.ok(service.findByEvento(id));
    }

    @PostMapping
    public ResponseEntity<List<FormularioDTO>> saveAll(@RequestBody List<FormularioDTO> dtoList) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.saveAll(dtoList));
    }

    @PutMapping()
    public ResponseEntity<List<FormularioDTO>> updateAll(@RequestBody List<FormularioDTO> dtoList) {
        return ResponseEntity.ok(service.updateAll(dtoList));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FormularioDTO> update(@PathVariable Long id, @RequestBody FormularioDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
