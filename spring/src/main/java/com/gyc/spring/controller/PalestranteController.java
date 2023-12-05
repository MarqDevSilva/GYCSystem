package com.gyc.spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gyc.spring.dto.PalestranteDTO;
import com.gyc.spring.service.PalestranteService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/palestrante")
public class PalestranteController {

    private final PalestranteService service;

    @GetMapping
    public ResponseEntity<List<PalestranteDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<PalestranteDTO>>findByEvento(@PathVariable Long id) {
        return ResponseEntity.ok(service.findByEvento(id));
    }

    @PostMapping
    public ResponseEntity<List<PalestranteDTO>> saveAll(@RequestBody List<PalestranteDTO> dtoList) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.saveAll(dtoList));
    }

    @PutMapping()
    public ResponseEntity<List<PalestranteDTO>> update(@RequestBody List<PalestranteDTO> dtoList) {
        return ResponseEntity.ok(service.updateAll(dtoList));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}