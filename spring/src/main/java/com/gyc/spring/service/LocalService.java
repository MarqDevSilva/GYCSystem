package com.gyc.spring.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.LocalDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.LocalMapper;
import com.gyc.spring.model.Local;
import com.gyc.spring.repository.LocalRepository;

@Service
public class LocalService extends BaseService<Local, LocalDTO> {

    @Autowired
    private LocalRepository localRepository;

    public LocalService(LocalRepository repository, LocalMapper mapper){
        super(repository, mapper);
    }

    public Optional<LocalDTO> findByEvento(Long id){
        Optional<Local> optional = localRepository.findByEventoId(id);
        return optional.map(mapper::toDto);
    }

    public LocalDTO update(Long id, LocalDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}
