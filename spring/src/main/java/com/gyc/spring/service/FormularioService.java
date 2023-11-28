package com.gyc.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.FormularioDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.FormularioMapper;
import com.gyc.spring.model.Formulario;
import com.gyc.spring.repository.FormularioRepository;

@Service
public class FormularioService extends BaseService<Formulario, FormularioDTO> {

    @Autowired
    private FormularioRepository formRepository;

    public FormularioService(FormularioRepository repository, FormularioMapper mapper){
        super(repository, mapper);
    }

    public List<FormularioDTO> findByEvento(Long id){
        return mapper.toDto(formRepository.findByEventoId(id));
    }

    public FormularioDTO update(Long id, FormularioDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}